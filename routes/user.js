const { Router } = require('express');

const { userGET, userPUT, userPOST, userDELETE } = require('../controllers/user');

const router = Router();

router.get('/', userGET);

router.put('/:id', userPUT);

router.post('/', userPOST);

router.delete('/', userDELETE);


module.exports = router;