function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) throw Error('Jobs is not an array');
  jobs.forEach((j) => {
    const job = queue.create('push_notification_code_3', j);
    job.on('complete', () => {
