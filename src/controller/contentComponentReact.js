function contentFunctionComponent(nameComponent) {
  const nameComponentWithFirstLetterUpperCase =
    nameComponent.charAt(0).toUpperCase() + nameComponent.slice(1);
  return `
  import React from 'react'
  
  export function ${nameComponentWithFirstLetterUpperCase}(){
    return(
      <>
        <h1>${nameComponentWithFirstLetterUpperCase}</h1>
      </>
    )
  }`;
}

module.exports = contentFunctionComponent