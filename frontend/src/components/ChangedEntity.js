import React, { useState, useEffect } from 'react';

function ChangedEntity(props) {

  const { created, original } = props;

  return (
    <>
        <span className="text-error-under hover-hide">{ created }</span>
        <span className="text-success hover-show font-weight-bold">{ original }</span>
    </>
  )
}

export default ChangedEntity;