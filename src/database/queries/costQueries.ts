export const qSelectVehicleCosts = 'SELECT * FROM gastos_vehiculos WHERE activo = 1'
export const qSelectVehicleCost = 'SELECT * FROM gastos_vehiculos WHERE activo = 1 AND id = @id'
export const qInsertVehicleCost = 'sp_gastos_vehiculos_am'
export const qUpdateVehicleCost = 'sp_gastos_vehiculos_am'