import React from "react";
import {useStores} from "../stores";
import {observer} from "mobx-react";
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const Component = observer(() => {
    const {ImageStore} = useStores();

    const props = {
        beforeUpload: file => {
            ImageStore.setFile(file);
            ImageStore.setFilename(file.name);
            ImageStore.upload()
                .then((serverFile) => {
                    console.log("上传成功");
                    console.log(serverFile)
                }).catch((err) => {
                console.log(err)
                console.log("上传失败");
            });
        }
    }


    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
            </p>
        </Dragger>
    );
});


export default Component;