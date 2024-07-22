import React, { useEffect, useState } from "react";
import LinkLoader from "./LinkLoader";
import LinkBox from "./LinkBox";
import { findMatchingLinks } from "../../db/getUsers";

const RecentLinks = ({ email }) => {
  const [links, setLinks] = useState([]);
  const [linkFound, setLinkFound] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findMatchingLinks(email);
        setTimeout(() => {
          setLinks(response); // Set the response data in state
          setLoading(false); // Set loading state to false once data is fetched
        }, 1500);
      } catch (error) {
        console.error("Error fetching links:", error);
        setLoading(false); // Handle error and set loading state accordingly
      }
    };

    fetchData();
  }, [email]); // Dependency added to rerun effect when email changes

  useEffect(() => {
    // Function to check if links are available
    setLinkFound(links.length > 0);
  }, [links]); // Dependency added to rerun when links state changes

  const renderLinks = () => {
    // Render links or no links found message based on state
    if (loading) {
      return <LinkLoader />; // Show loader while fetching data
    } else if (!linkFound) {
      return (
        <div className="flex w-[100%] h-[150px] justify-center items-center">
          <div>
            <h1 className="font-Radio">No Links yet.</h1>
            <p className="font-Radio">Shorten a link now.</p>
          </div>
        </div>
      );
    } else {
      return links.map((data, key) => (
        <LinkBox
          key={key}
          longURL={data.longURL}
          shortURL={data.shortURL}
          date={data.timestamp}
        />
      ));
    }
  };

  return (
    <div className="sm:mx-16 xs:mx-6 md:mx-20">
      <h2 className="font-Inter xs:text-[1.5rem] md:text-[2rem] text-white">
        Recent Links
      </h2>
      {renderLinks()} {/* Call the renderLinks function to display content */}
    </div>
  );
};

export default RecentLinks;
