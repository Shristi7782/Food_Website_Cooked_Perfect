const homeController = require('../app/controllers/homeController');
const authController = require('../app/controllers/authController');
const cartController = require('../app/controllers/customers/cartController');
const orderController = require('../app/controllers/customers/orderController');
const adminOrderController = require('../app/controllers/admin/orderController');
const statusController = require('../app/controllers/admin/statusController');

// Middlewares 
//const guest = require('../app/http/middlewares/guest');
function guest (req, res, next) {
    if(!req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/')
}

//const auth = require('../app/http/middlewares/auth1');
function auth(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/login')
}
//const admin = require('../app/http/middlewares/admin');
function admin (req, res, next) {
    if(req.isAuthenticated() && req.user.role === 'admin') {
        return next()
    }
    return res.redirect('/')
}

function initRoutes(app) {
    app.get('/', homeController().index);
    app.get('/starter', homeController().starter);
    app.get('/course', homeController().course);
    app.get('/dessert', homeController().dessert);
    app.get('/keventer', homeController().keventer);
    app.get('/login', guest, authController().login);
    app.post('/login', authController().postLogin);
    app.get('/register', guest, authController().register);
    app.post('/register', authController().postRegister);
    app.post('/logout', authController().logout);

    // Cart
    app.get('/cart', cartController().index);
    app.post('/update-cart', cartController().update);

    // Customer routes
    app.post('/orders', auth, orderController().store);
    app.get('/customer/order', auth, orderController().index);
    app.get('/customer/order/:id', auth, orderController().show);

    // Admin routes
    app.get('/admin/order', admin, adminOrderController().index);
    app.post('/admin/order/status', admin, statusController().update);
}

module.exports = initRoutes;