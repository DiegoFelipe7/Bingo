const Usuarios = ({ listado }) => {
  const { id, nombre, apellido } = listado;
  return (
    <>
      <tr className="bg-white text-center">
        <td className="text-black">{id}</td>
        <td>{nombre}</td>
        <td>{apellido}</td>
      </tr>
    </>
  );
};

export default Usuarios;
