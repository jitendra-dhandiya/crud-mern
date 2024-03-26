import {Router} from 'express'
import {createUsers,getallUsers,updateUserById,deleteUserById,getUserById} from '../controllers/userControl.js'

const userRoute = Router();

userRoute.route('/create').post(createUsers)
userRoute.route('/get').get(getallUsers)
userRoute.route('/get/:id').get(getUserById)
userRoute.route('/update/:id').put(updateUserById)
userRoute.route('/delete/:id').delete(deleteUserById)

export default userRoute;