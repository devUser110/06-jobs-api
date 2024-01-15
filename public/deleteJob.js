import { enableInput, inputEnabled, message, setDiv, token } from "./index.js";
import { showJobs } from "./jobs.js";

export const handleDelete = async (jobId) => {
  enableInput(false);
  const url = `/api/v1/jobs/${jobId}`;
  // console.log(jobId);

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    message.textContent = data.message;
    console.log(data.msg);
    showJobs();
    enableInput(true);
  } catch (error) {
    console.log(error);
    message.textContent = "A communication error occurred.";
  }
};
