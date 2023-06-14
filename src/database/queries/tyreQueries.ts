export const qCreateTyre = 'sp_cubiertas_abm'
export const qUpdateTyre = 'sp_cubiertas_abm'
export const qSelectTyres = 'sp_cubiertas_seek'
export const qSelectTyre = 'sp_cubiertas_seek'
//Marcas cubiertas
export const qCreateTyreBrand = 'sp_marcas_cubiertas_abm'
export const qUpdateTyreBrand = 'sp_marcas_cubiertas_abm'
export const qSelectTyreBrands = 'SELECT * FROM marcas_cubiertas'
//Medidas cubiertas
export const qCreateTyreSzie = 'sp_medidas_cubiertas_abm' 
export const qUpdateTyreSize = 'sp_medidas_cubiertas_abm'
export const qSelectTyreSizes = 'SELECT * FROM medidas_cubiertas'
//Buscar cual fue la ultima accion de la cubierta en el vehiculo
export const qfindTyreLastAction = `SELECT TOP 1 c.id,c.numero,c.activo,marcas.marca,medidas.medida,
c.id_marca, c.id_medida, vc.accion
FROM	cubiertas AS c
INNER JOIN marcas_cubiertas AS marcas ON c.id_marca = marcas.id
INNER JOIN medidas_cubiertas AS medidas ON c.id_medida = medidas.id
INNER JOIN vehiculos_cubiertas AS vc ON c.id = vc.id_cubierta
WHERE vc.id_cubierta = @id_cubierta
ORDER BY vc.fecha_accion DESC`
export const qSelectNotAsignedTyres = 'sp_cubiertas_no_asignadas'
export const qSelectTyreHistory = `SELECT * FROM viajes_cubiertas 
WHERE id_cubierta = @id_cubierta AND activo = 1`
export const qSelectLastKms = `SELECT TOP 1 vc.kilometros_tractor, c.numero  
FROM vehiculos_cubiertas AS vc, cubiertas AS c 
WHERE id_cubierta = @id_cubierta AND id_vehiculo = @id_vehiculo AND id_cubierta = c.id
ORDER BY fecha_accion DESC`

//CUBIERTAS VEH PERSONAL
export const qCreatePVTyre = 'sp_cubiertas_vp_abm'
export const qUpdatePVTyre = 'sp_cubiertas_vp_abm'
export const qSelectPVTyres = 'sp_cubiertas_vp_seek'
export const qSelectPVTyre = 'sp_cubiertas_vp_seek'
export const qSelectNotAsignedPVTyres = 'sp_cubiertas_vp_no_asignadas'