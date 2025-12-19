import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://starholiday.demovoting.com/api",

  baseURL: "http://127.0.0.1:8000/api",
  fileURL: "http://127.0.0.1:8000/uploads",
  // fileURL: "https://starholiday.demovoting.com/uploads",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add CSRF token to requests
axiosInstance.interceptors.request.use(
  async (config) => {
    // Only for non-GET requests
    if (config.method !== "get" && config.method !== "GET") {
      try {
        // Get CSRF token from meta tag (if available)
        const csrfToken = document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute("content");

        if (csrfToken) {
          config.headers["X-CSRF-TOKEN"] = csrfToken;
        }

        // Also try to get from cookie
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("XSRF-TOKEN="))
          ?.split("=")[1];

        if (cookieValue) {
          config.headers["X-XSRF-TOKEN"] = decodeURIComponent(cookieValue);
        }
      } catch (error) {
        console.warn("CSRF token not available:", error);
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 419) {
      console.error("CSRF token mismatch. Please refresh the page.");
      // Optionally redirect to home or refresh page
      // window.location.reload();
    }
    return Promise.reject(error);
  }
);

// Add CSRF token to requests
axiosInstance.interceptors.request.use(
  async (config) => {
    // Only for non-GET requests
    if (config.method !== "get" && config.method !== "GET") {
      try {
        // Get CSRF token from meta tag (if available)
        const csrfToken = document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute("content");

        if (csrfToken) {
          config.headers["X-CSRF-TOKEN"] = csrfToken;
        }

        // Also try to get from cookie
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("XSRF-TOKEN="))
          ?.split("=")[1];

        if (cookieValue) {
          config.headers["X-XSRF-TOKEN"] = decodeURIComponent(cookieValue);
        }
      } catch (error) {
        console.warn("CSRF token not available:", error);
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Remove CSRF interceptor since it's no longer needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any other headers you might need
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Remove CSRF interceptor since it's no longer needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any other headers you might need
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
