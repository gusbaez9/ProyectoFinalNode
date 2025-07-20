// controller
import userService from '../services/user.service.js'
const getUsers = (req, res) => {
    try {
        const users = userService.getAll();
        if (users.length === 0)
            return res.status(200).json({ message: "No hay datos disponibles" });

        res.status(200).json({ message: "Listado de usuarios", payload: users });
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
};

/*const createUser = (req, res) => {
    const {name}
    try {

    } catch (error) {

    }
}*/
export default { getUsers };
