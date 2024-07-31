import React, { useRef } from 'react';

interface FileUploadProps {
    file: any;
    setFile: Function;
    accept: string;
    children: any;
}

/* (компонент для загрузки файлов(трек и обложка)) */
const FileUpload: React.FC<FileUploadProps> = ({file, setFile, accept, children}) => {

    const ref = useRef<HTMLInputElement>(null); /* (получаем инпут из DOM-дерева) */

    return (
        // <div onClick={() => ref.current.click()}>
        <div onClick={() => ref.current?.click()}> {/* (при клике по блоку произойдет клик по скрытому инпуту(скрываем, чтобы вместо его стилей были видны стили блока)) */}
            <input 
                type="file"
                accept={accept} /* (для контроля форматов загружаемых файлов) */
                style={{display: "none"}} /* (скрываем родные стили иниута) */ 
                ref={ref}   
            />
            {children}
        </div>
    );
};

export default FileUpload;