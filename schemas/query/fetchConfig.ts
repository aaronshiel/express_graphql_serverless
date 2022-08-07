import Config, {ConfigModel, ConfigType} from '../Models/Config'

export const fetchConfig ={
    type: ConfigType,
    // @ts-ignore
    async resolve(parent, args) {
        try{
            const config = await Config.findOne({})
            return config
            }catch(e){
                console.log(e)
                throw new Error(String(e))
        }
    }
}
export default fetchConfig;