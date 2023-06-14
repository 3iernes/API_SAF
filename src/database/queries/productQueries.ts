export const qSelectProducts = "SELECT id,desc_producto FROM productos WHERE activo = 1"
export const qSelectProduct = "SELECT id,desc_producto FROM productos WHERE id = @id AND activo = 1"
export const qIsnertProduct = "sp_productos_am"
export const qUpdateProduct = "sp_productos_am"