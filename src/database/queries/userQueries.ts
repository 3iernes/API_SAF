export const qFindUserByEmail = `SELECT id,nombre,email,password,allowed,is_admin 
FROM usuarios
WHERE email = @email`
export const qGetUserNavBar = `SELECT Routes.path, Routes.element, Routes.id, Routes.descrip, Routes.category, Routes.display
FROM UserRoutes, Routes, usuarios
WHERE usuarios.id = UserRoutes.id_user AND UserRoutes.id_route = Routes.id AND usuarios.id = @id_user`
export const qInsertUser = `INSERT INTO usuarios(nombre,email,password,allowed,is_admin)
VALUES(@nombre,@email,@password,1,0)`