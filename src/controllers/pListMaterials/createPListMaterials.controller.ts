import { Request, Response } from "express"
import createPListMaterialsServie from "../../services/pListMaterials/createPListaMaterials.service"


const createPListaMaterialsController = async (req: Request, res: Response) => {

    const {id} = req.params
    const data = req.body
    const pListMaterials = await createPListMaterialsServie(data, id)

    return res.status(201).json(pListMaterials)
}

export default createPListaMaterialsController