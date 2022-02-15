const { Router } = require('express');
const { check } = require('express-validator');

const { userGET, userPUT, userPOST, userDELETE } = require('../controllers/user');
const { validarCampos } = require('../middlewares/validarCampos');
const { validateRole, validateEmail, validateUserId } = require('../helpers/dbValidators');

const router = Router();

router.get('/', userGET);

router.put('/:id',[
    check('id', 'El id no es válido').isMongoId(),
    check('id', validateUserId),
    check('role').custom( validateRole ),
    validarCampos

] ,userPUT);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email').custom( validateEmail ),
    check('password', 'El password debe tener más de 6 caracteres').isLength({min: 6}),
    check('role').custom( validateRole ),
    // check('email', 'El email no es válido').isEmail(),
    // check('role', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos /*validación */
], userPOST);

router.delete('/:id',[
    check('id', 'El id no es válido').isMongoId(),
    check('id', validateUserId) ,
    validarCampos
] ,userDELETE);


module.exports = router;