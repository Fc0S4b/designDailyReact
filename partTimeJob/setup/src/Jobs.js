import React from 'react';

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs-container">
      {jobs.map((item, index) => {
        const { id, job, icon } = item;
        return (
          <article key={id} className={`box box-job-${index}`}>
            <span>{icon}</span>
            <h2 className="text-job">{job}</h2>
          </article>
        );
      })}
    </div>
  );
};

export default Jobs;
