const User = require('../models/userModel');
const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const generateJWT = (payload) => {
	return jwt.sign(
		{...payload},
		process.env.SECRET_KEY,
		{expiresIn: '24h'}
	);
}

class UserController {
	async registration(req, res, next) {
		const {email, password, firstname, lastname} = req.body;
		
		const candidate = await User.findOne({where: {email}});
		
		if (candidate) {
			return next(ApiError.badRequest("User already created"));
		}
		
		const hashPassword = await bcrypt.hash(password, 5);
		
		const user = await User.create({
			email,
			password: hashPassword,
			firstname,
			lastname
		})
		
		const token = generateJWT({
			id: user.id,
			email: user.email,
			firstname: user.firstname,
			lastname: user.lastname
		});
		
		return res.status(200).json({token});
	}
	
	async login(req, res, next) {
		const {email, password} = req.body;
		
		const user = await User.findOne({where: {email}});
		if (!user) {
			return next(ApiError.badRequest('User is not found', {auth: false}));
		}

		const comparePassword = await bcrypt.compareSync(password, user.password);
		if (!comparePassword) {
			return next(ApiError.badRequest('Password incorrect',{auth: false}))
		}
		
		const token = generateJWT({
			id: user.id,
			email: user.email,
			firstname: user.firstname,
			lastname: user.lastname
		});
		
		return res.json({token, auth: true});
	}
	
	async check(req, res, next) {
		const token = generateJWT({
			id: req.user.id,
			email: req.user.email,
			firstname: req.user.firstname,
			lastname: req.user.lastname
		})
		
		return res.status(200).json({auth: true, token});
	}
}

module.exports = new UserController();