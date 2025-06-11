const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} aafak fatima zahra</span>
        <span>
          {/* Designed By{" "} */}
          {/* <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            Codeefly
          </a> */}
        </span>
        <ul>
          <li>
            <a href="https://github.com/fati-aafak">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/aafak-fatima-zahra-112198229">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="fa-brands fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
