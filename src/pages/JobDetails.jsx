import { Link, useParams } from 'react-router';
import JobCard from '../components/JobCard.jsx';

function JobDetails({ jobs, limitReached, changeApplication }) {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <>
        <h1>Job not found</h1>
        <Link to="/jobs">Back to Jobs</Link>
      </>
    );
  }

  return (
    <>
      <h1>Job Details</h1>
      <JobCard
        job={job}
        limitReached={limitReached}
        changeApplication={changeApplication}
        showDetailsLink={false}
      />
      <section className="details">
        <p>Openings: {job.openings}</p>
        <p>Experience required: {job.experienceRequired} years</p>
        <h2>Skills</h2>
        <ul>
          {job.skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
      <Link to="/jobs">Back to Jobs</Link>
    </>
  );
}

export default JobDetails;
