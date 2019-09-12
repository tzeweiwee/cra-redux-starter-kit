import React from "react";
import QRCode from "qrcode.react";

const QrCode = ({ url = "" }) => {
  return <QRCode value={url} size={200} />;
};

export default QrCode;
