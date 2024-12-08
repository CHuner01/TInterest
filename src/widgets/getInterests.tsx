import {apiAxios} from "../shared/config";
import {useEffect, useState} from "react";
import Tag from "../entities/tag";
import {TagType} from "../shared/types";

function GetInterests() {

    const [tags, setTags] = useState<TagType[]>([]);

    useEffect(() => {
        getTags();
    }, []);

    function getTags() {
        apiAxios.get("/tags")
            .then(function(response) {
                console.log(response);
                setTags(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return(
        <>
            {tags.map((tag) => (
                <>
                    <Tag
                        key={tag.id}
                        id={tag.id}
                        name={tag.name}
                        selected={tag.selected}
                    />
                </>
            ))}
        </>
    );
}

export default GetInterests;