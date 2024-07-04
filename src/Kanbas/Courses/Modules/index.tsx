import React, { useState } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from 'react-icons/bs';
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { modules as dbModules } from "../../Database";

// interface Lesson {
//   _id: string;
//   name: string;
//   description: string;
//   module: string;
// }

// interface Module {
//   _id: string;
//   name: string;
//   description: string;
//   course: string;
//   lessons?: Lesson[];
//   editing?: boolean;
// }

// export default function Modules() {
//   const { courseId } = useParams<{ courseId: string }>();
//   const [modules, setModules] = useState<Module[]>(dbModules);
//   const [moduleName, setModuleName] = useState("");

//   const handleDeleteModule = (moduleId: string) => {
//     setModules(modules.filter((m) => m._id !== moduleId));
//   };

//   const handleAddModule = () => {
//     const newModule: Module = {
//       _id: new Date().getTime().toString(),
//       name: moduleName,
//       description: "",
//       course: courseId || "",
//     };
//     setModules([...modules, newModule]);
//     setModuleName("");
//   };

//   const handleEditModule = (moduleId: string) => {
//     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
//   };

//   const handleUpdateModule = (module: Module) => {
//     setModules(modules.map((m) => (m._id === module._id ? { ...module, editing: false } : m)));
//   };

//   return (
//     <div className="wd-modules">
//       <ModulesControls
//         moduleName={moduleName}
//         setModuleName={setModuleName}
//         addModule={handleAddModule}
//       />
//       <ul className="list-group">
//         {modules
//           .filter((module) => module.course === courseId)
//           .map((module) => (
//             <li key={module._id} className="list-group-item">
//               <div className="d-flex align-items-center">
//                 <BsGripVertical className="me-2" />
//                 {module.editing ? (
//                   <input
//                     className="form-control w-50"
//                     value={module.name}
//                     onChange={(e) => handleUpdateModule({ ...module, name: e.target.value })}
//                     onBlur={() => handleUpdateModule(module)}
//                     onKeyPress={(e) => {
//                       if (e.key === "Enter") {
//                         handleUpdateModule(module);
//                       }
//                     }}
//                   />
//                 ) : (
//                   <span>{module.name}</span>
//                 )}
//                 <ModuleControlButtons
//                   moduleId={module._id}
//                   deleteModule={handleDeleteModule}
//                   editModule={handleEditModule}
//                 />
//               </div>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  return (
    <div className="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <ul id="wd-modules" className="list-group rounded-0">
        <>
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <>
                {!module.editing && module.name}
                { module.editing && (
                  <input className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
          }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    value={module.name}
                  />
                )}
                 
                <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
                 </>
                ))}
                </>
                
                </ul></div>);
              }