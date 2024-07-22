import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handleRedirect } from "../../db/getUsers";
import ErrorPage from "./ErrorPage";

const RedirectComponent = () => {
  const { redirectId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRedirectURL = async () => {
      try {
        const response = await handleRedirect(redirectId);

        if (response.longURL === "URL not found") {
          setError(true);
        } else {
          // Ensure the URL is properly formatted
          const validURL = response.longURL.startsWith("http")
            ? response.longURL
            : `https://${response.longURL}`;
          window.location.replace(validURL); // Use replace to avoid keeping the old URL in history
        }
      } catch (err) {
        console.error("Error fetching redirect URL:", err);
        setError(true);
      }
    };

    fetchRedirectURL();
  }, [redirectId]);

  if (error) {
    return <ErrorPage />;
  }

  return null; // Render nothing while redirecting
};

export default RedirectComponent;
