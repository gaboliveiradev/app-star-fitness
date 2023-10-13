import React, { useContext, useState, } from 'react';
import AuthContext from '../context/AuthContext';

export default function MyEmployee() {

    const { typeList, deleteType, token } = useContext(AuthContext);
    const [records, setRecords] = useState(typeList);

  return (
    <article className="flex-auto h-full mx-auto rounded-md w-ful">
      <div className="flex flex-col md:flex-row">
        <div className="flex-auto pb-[14px]">
        <h1 class="title">{`Gestão de Funcionários (${records.length})`}</h1>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Funcionários</a>
            </li>
            <li class="divider">/</li>
            <li>
              <a href="#" class="active">
                Gestão de Funcionários
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
