const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const  businessRouter  = require('./businesses.js')
///place router that goes to each business page


router.use('/session',sessionRouter)
router.use('/businesses', businessRouter)

  router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
      return res.json(req.user);
    }
    );
    
    router.get('/set-token-cookie', asyncHandler(async (req, res) => {
      const user = await User.findOne({
        where: {
          username: 'Demo-lition'
        },
      })
      setTokenCookie(res, user);
      return res.json({ user });
    }));
    

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

  //GET /api/restore-user (test JWT restoration)


module.exports = router;