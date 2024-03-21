import React, { useState } from "react";
import "./Home.css";
import { User } from "../../ui/User";
import { fetchUsers } from "../../../api";

interface HomeProps {}
interface UsersProps {
  avatar_url: string;
  login: string;
  id: number;
}
// interface UserInfoP {
//   id: number;
//   name: string;
//   description: string;
//   language: string;
// }

export const Home: React.FC<HomeProps> = () => {
  const [query, setQuery] = useState<string>("");
  //users Fetched from API
  const [users, setUsers] = useState<UsersProps[]>([]);
  //Page
  const [page, setPage] = useState<number>(1);
  //Per page
  const [limit, setLimit] = useState<number>(10);

  const handleQueryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    // console.log(e.target.value);
  };

  const handlePrevPage = () => {
    setPage((page: number) => {
      if (page === 1) return page;
      else return page - 1;
    });
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePageLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLimit(parseInt(value));
  };

  // const fetchUsers = async (query) => {
  //   try {
  //     const { data } = await instanceAxios.get("/search/users?q=" + query, {
  //       params: {
  //         page,
  //         per_page: limit,
  //       },
  //     });
  //     return data?.items;

  //     // return data && data.items;
  //   } catch (error) {
  //     return null;
  //   }
  // };

  const handleSearchUsers = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers(query, page, limit);
      console.log(items);
      setUsers(items);
    } else {
      console.log("Your query is empty ...");
    }
  };

  // useEffect(() => {
  //   const displayUserOnChange = async () => {
  //     if (query) {
  //       const items = await fetchUsers(query);
  //       setUsers(items);
  //     }
  //   };
  //   displayUserOnChange();
  // }, [page, limit, query]);

  return (
    <div className="container">
      <div className="search-form">
        <h2>GitHub Search User</h2>
        <form action="">
          <input value={query} onChange={handleQueryInput} type="text" />
          <button onClick={handleSearchUsers}>Search</button>
        </form>
      </div>
      <div className="search-result">
        <div className="more-options">
          <label>
            <small>Per Page</small>
            <select onChange={handlePageLimit}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          <div className="pagination">
            <button onClick={handlePrevPage}>{page}</button>
            <button onClick={handleNextPage}>{page + 1}</button>
          </div>
        </div>
        {users ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h2>There is nothing to display...</h2>
        )}
      </div>
    </div>
  );
};
