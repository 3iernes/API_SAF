export const qInsertTrip = 'sp_viajes_abm'
export const qSelectTrips = 'sp_viajes_seek'
export const qSelectTrip = 'sp_viajes_seek'
export const qUnionTripVehicle = 'sp_link_viaje_equipos'
export const qEndTrip = 'sp_viaje_finalizar'
export const qSelectTripVehicles = 'sp_viaje_equipos_seek'
export const qSelectTripByState = 'sp_viajes_x_estado'
export const qSelectVehicleInTripKm = 'SELECT km_camion_inicio FROM viajes WHERE id = @id_viaje'
export const qSelectTripsTypes = 'SELECT * FROM tipos_viajes'

//MODIFICACION: que mal la estoy pasando con los viajes
export const qInsertEquipo = 'sp_equipos_abm'
export const qUnionTripVehicleV2 = "sp_link_viaje_equiposV2"
export const qEndTripV2 = 'sp_viaje_finalizarV2'
export const qSelectVehicleInTripKmV2 = 'SELECT km_inicio FROM viajes_equipos WHERE id_viaje = @id_viaje AND id_equipo = @id_equipo'
export const qRemoveVehicleInTrip = 'sp_viaje_quitar_equipo'