export const qInsertCompany = 'sp_empresas_am'
export const qUpdateCompany = 'sp_empresas_am'
export const qSelectCompanies = 'SELECT id, nomb_empresa,activo,cuit FROM empresas'
export const qSelectCompany= 'SELECT id, nomb_empresa,activo,cuit FROM empresas WHERE id = @id'