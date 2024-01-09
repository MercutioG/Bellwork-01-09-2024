const DynamicListContainer = (data, type, orientation) => {
  console.log(orientation);
  console.log(type);
  console.log(data);
  function checkParams(){
    return `<${type} class='${orientation}'>
      Hi
    </${type}>`
  }

  return (
    <>
      {checkParams()}
    </>
  )
}

export default DynamicListContainer