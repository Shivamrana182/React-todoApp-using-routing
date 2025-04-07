import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">About This App</h2>
          <p className="text-muted">Simple. Efficient. Yours.</p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
              alt="Todo Illustration"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <p className="lead">
              Welcome to <strong>MyTodosList</strong> — a sleek, user-friendly to-do app built with React. Whether you're managing your daily chores or planning a project, this app helps you stay organized and productive.
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔️ Add, delete & view tasks</li>
              <li className="list-group-item">✔️ Data saved in localStorage</li>
              <li className="list-group-item">✔️ React Router for smooth navigation</li>
              <li className="list-group-item">✔️ Styled with Bootstrap 5</li>
            </ul>
            <p className="mt-3 text-muted">
              Built with 💙 by Shivam Rana @shivam.rana.182@gmail.com . Open-source and free to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
