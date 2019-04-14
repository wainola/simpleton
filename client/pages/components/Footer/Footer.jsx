if (process.env.NODE_ENV !== 'test') {
  require('./styles.scss');
}

export default () => (
  <footer className="main-footer">
    <h2>Footer</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laborum sint pariatur. Nisi
      architecto ratione sequi officia quidem vitae. Atque ipsa necessitatibus labore possimus
      expedita porro ullam et quam minus.
    </p>
  </footer>
);
