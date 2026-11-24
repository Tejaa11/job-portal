import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import initialJobs from './data/jobs.js';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import JobDetails from './pages/JobDetails.jsx';
import Applied from './pages/Applied.jsx';

const applicationLimit = 3;

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState('');
  const [mode, setMode] = useState('All');

  const appliedJobs = jobs.filter((job) => job.isApplied);
  const remoteCount = jobs.filter((job) => job.mode === 'Remote').length;
  const limitReached = appliedJobs.length >= applicationLimit;

  function changeApplication(jobId, isApplied) {
    setJobs((currentJobs) => {
      const selectedJob = currentJobs.find((job) => job.id === jobId);
      if (!selectedJob || selectedJob.isApplied === isApplied) {
        return currentJobs;
      }

      const currentCount = currentJobs.filter((job) => job.isApplied).length;
      if (isApplied && (selectedJob.openings === 0 || currentCount >= applicationLimit)) {
        return currentJobs;
      }

      return currentJobs.map((job) => {
        if (job.id === jobId) {
          return { ...job, isApplied: isApplied };
        }
        return job;
      });
    });
  }

  return (
    <BrowserRouter>
      <Navbar appliedCount={appliedJobs.length} />
      <main className="container">
        <Routes>
          <Route path="/" element={
            <Home totalJobs={jobs.length} appliedCount={appliedJobs.length} remoteCount={remoteCount} />
          } />
          <Route path="/jobs" element={
            <Jobs
              jobs={jobs}
              search={search}
              setSearch={setSearch}
              mode={mode}
              setMode={setMode}
              limitReached={limitReached}
              changeApplication={changeApplication}
            />
          } />
          <Route path="/jobs/:id" element={
            <JobDetails jobs={jobs} limitReached={limitReached} changeApplication={changeApplication} />
          } />
          <Route path="/applied" element={
            <Applied jobs={appliedJobs} applicationLimit={applicationLimit} changeApplication={changeApplication} />
          } />
          <Route path="*" element={<><h1>Page not found</h1><Link to="/">Back to Home</Link></>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
