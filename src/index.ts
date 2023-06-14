import 'dotenv/config' 
import app from './app'

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port ',app.get('port'));
    console.log('\x1b[33;49;1m Podes ver la documentacion de esta API')
    console.log(' haciendo CTRL + click -> \x1b[34;49m http://logiports.duckdns.org:5000/')
    
}

main();