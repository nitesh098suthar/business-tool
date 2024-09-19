import { UploadApiResponse } from 'cloudinary'
import cloudinary from './cloudinary-Setup'


export const Imageupload = async (file: File, folder: string): Promise<UploadApiResponse> => {
    const buffer = await file.arrayBuffer()
    const bytes = Buffer.from(buffer)
    return new Promise(async (resolve, reject) => {
        const cloudRes = await cloudinary.uploader
            .upload_stream(
                {
                    resource_type: 'auto',
                    folder: folder,
                },

                async (err, result) => {
                    if (err) {
                        reject(err.message)
                    }
                    resolve(result as UploadApiResponse)
                }
            )
            .end(bytes)
        return cloudRes
    })
}
export const deleteImage = async (publicId: string): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                return reject(error)
            }
            resolve(result)
        })
    })
}
