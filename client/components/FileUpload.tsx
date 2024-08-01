import React, { useRef } from 'react';

interface FileUploadProps {
<<<<<<< HEAD
=======
    file: any;
>>>>>>> 9a89dbe0bed9ded2c4ec5b68144a383b1e670550
    setFile: Function;
    accept: string;
    children: any;
}

/* (компонент для загрузки файлов(трек и обложка)) */
<<<<<<< HEAD
const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {

    const ref = useRef<HTMLInputElement>(null); /* (получаем инпут из DOM-дерева) */

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { /* (навешиваем функцию на изменения в инпуте) */
        // console.log(e.target.files); /* (получаемый обьект) */
        setFile(e.target.files?.[0]); /* (вызываем пришедшую в пропсах функцию с загруженным файлом) */
    }

=======
const FileUpload: React.FC<FileUploadProps> = ({file, setFile, accept, children}) => {

    const ref = useRef<HTMLInputElement>(null); /* (получаем инпут из DOM-дерева) */

>>>>>>> 9a89dbe0bed9ded2c4ec5b68144a383b1e670550
    return (
        // <div onClick={() => ref.current.click()}>
        <div onClick={() => ref.current?.click()}> {/* (при клике по блоку произойдет клик по скрытому инпуту(скрываем, чтобы вместо его стилей были видны стили блока)) */}
            <input 
                type="file"
                accept={accept} /* (для контроля форматов загружаемых файлов) */
                style={{display: "none"}} /* (скрываем родные стили иниута) */ 
                ref={ref}   
<<<<<<< HEAD
                onChange={onChange}
=======
>>>>>>> 9a89dbe0bed9ded2c4ec5b68144a383b1e670550
            />
            {children}
        </div>
    );
};

export default FileUpload;