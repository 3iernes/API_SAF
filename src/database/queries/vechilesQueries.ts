export const getVehicles = 'sp_vehiculos_seek'
export const getVehicle = 'sp_vehiculo_detalle_seek'
export const createVehicle = 'sp_vehiculos_abm'
export const modVehicle = 'sp_vehiculos_abm'
export const disableVehicle = 'sp_vehiculos_onoff'
export const insertUpdateEquip = 'sp_equipos_abm'
export const qSelectTruckTyres = 'sp_cubiertas_vehiculo_seek'
//Vincular vehiculo cubiertas
export const qLinkVehicleTyre = 'sp_link_vehiculos_cubiertas'
export const qFindeVehicleOnTrip = `SELECT TOP 1 v.*
FROM viajes AS v, viajes_equipos AS ve
WHERE v.id = ve.id_viaje AND 
	(ve.id_camion = @id_camion OR ve.id_acoplado = @id_acoplado) AND
	(v.km_camion_inicio IS NOT NULL AND v.km_camion_final IS NULL)
ORDER BY v.fecha_creacion DESC`
export const qInsertVechicleTyresOnTrip = `INSERT INTO viajes_cubiertas(id_viaje,id_cubierta,km_camion,inicio)
VALUES(@id_viaje,@id_cubierta,@km_camion,@inicio)`
//Cargas de combustible
export const qInsertFuelLoad = 'sp_vehiculo_carga_combustible'
export const qSelectFuelLoads = 'sp_vehiculos_combustible_seek'