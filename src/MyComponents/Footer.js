import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center"
  };

  return (
    <footer className='py-3' style={footerStyle}>
      <p className='mb-0'>
        Copyright &copy; makemytodoslist.com
      </p>
    </footer>
  );
};

export default Footer;
