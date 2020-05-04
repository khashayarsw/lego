const Cooki = props => {
  const { onClose } = props;
  return (
    <div className="panel__cooki">
      <p className="panel__cooki__desc">
        We want to let you know that we are placing cookies on your device that
        remember your choices on lego.com, e.g your home country, high-score and
        your LEGO ID. We also place cookies that performs statistics on our
        website and cookies that help us run the website. For more info view our
        Cookie Policy and our Privacy Policy.
      </p>
      <button className="panel__cooki__btn" onClick={onClose()}>ok</button>
      <style jsx>{`
        .panel__cooki {
          position: fixed;
          width: 100%;
          bottom: 0;
          text-align: center;
          font-size: 1rem;
          color: #ffffff;
          background-color: black;
        }
        .panel__cooki__desc {
          margin-bottom: 0;
          padding: 5px;
        }
        .panel__cooki__btn {
          margin-bottom: 10px;
          display: inline-block;
          background-color: transparent;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
};
export default Cooki;
