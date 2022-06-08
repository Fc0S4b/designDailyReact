import React from 'react';

const Jobs = ({ jobs }) => {
  return (
    <>
      {jobs.map((item) => {
        const { id, job, icon } = item;
        return (
          <article key={id} className="box-job">
            <span>{icon}</span>
            <h2>{job}</h2>
          </article>
        );
      })}
    </>
  );
};

export default Jobs;
