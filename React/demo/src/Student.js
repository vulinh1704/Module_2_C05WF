import axios from "axios";
import { useEffect, useState } from "react"

export function Student() {
    let [list, setList] = useState([]);
    let [nameSearch, setNameSearch] = useState("");

    let getAll = () => {
        axios.get("http://localhost:3000/students").then((res) => {
            let data = res.data;
            setList(data);
        })
    }

    useEffect(() => {
        getAll();
    }, []);



    let searchName = (event) => {
        let name = event.target.value;
        setNameSearch(name);
        if (name === "") {
            getAll();
            return;
        }
        let newLList = list.filter((item) => {
            return item.name.toLowerCase().includes(name.toLowerCase());
        });
        console.log(newLList);
        setList(newLList);
    }

    let sortBySore = (event) => {
        let value = event.target.value;
        if(value === "") {
            getAll();
            return;
        }
        if(value == "asc") {
            let newList = [...list];
            newList.sort((a , b) => {
                return a.score - b.score;
            });
            setList(newList);
        } else {
            let newList = [...list];
            newList.sort((a , b) => {
                return b.score - a.score;
            });
            setList(newList);
        }
    }
    return (
        <>
            <input placeholder="Search Name" value={nameSearch} onChange={(event) => { searchName(event) }}></input>
            <select onChange={(event) => {sortBySore(event)}}>
                <option value="">Sắp xếp điểm</option>
                <option value="asc">Tăng dần</option>
                <option value="desc">Giảm dần</option>
            </select>
            <h1>Danh sách điểm</h1>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>ACTION</th>
                    <th>SCORE</th>
                </tr>
                {
                    list.map((item) => (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.action}</td>
                                <td>{item.score}</td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}

/*

C (Create) - POST: Thêm dữ liệu
R (Read) - GET: Lấy dữ liệu // axios.get
U (Update) - PUT: Sửa dữ liệu
D(Delete) - DELETE: Xóa dữ liệu

*/