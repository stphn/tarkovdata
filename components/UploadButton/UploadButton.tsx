import { ChangeEventHandler } from 'react'

export interface UploadButtonProps {
    onUpload: ChangeEventHandler<HTMLInputElement>
    loading: boolean
}

export const UploadButton = (props: UploadButtonProps) => {
    return (
        <div>
            <label className='button primary block' htmlFor='single'>
                {props.loading ? 'Uploading ...' : 'Upload'}
            </label>
            <input
                style={{
                    visibility: 'hidden',
                    position: 'absolute',
                }}
                type='file'
                id='single'
                accept='image/*'
                onChange={props.onUpload}
                disabled={props.loading}
            />
        </div>
    )
}
