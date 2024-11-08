import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const CommentContainer = () => {
  const mode = useSelector((store) => store.darkMode.isDark);
  const commData = [
    {
      name: "Arul",
      text: "Fabulous Trailer.",
      replies: [],
    },
    {
      name: "Ajay",
      text: "Fabulous Trailer what a man.",
      replies: [
        {
          name: "Harul",
          text: "Fabulous Trailer.",
          replies: [
            {
              name: "rutvik",
              text: "Fabulous Trailer.",
              replies: [],
            },
            {
              name: "Hajmal",
              text: "Fabulous Trailer.",
              replies: [
                {
                  name: "Hajmal",
                  text: "Fabulous Trailer.",
                  replies: [
                    {
                      name: "Hajmal",
                      text: "Fabulous Trailer.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "jurul",
              text: "Fabulous Trailer.",
              replies: [
                {
                  name: "Hajmal",
                  text: "Fabulous Trailer.",
                  replies: [
                    {
                      name: "Hajmal",
                      text: "Fabulous Trailer.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "VArul",
          text: "Fabulous Trailer.",
          replies: [
            {
              name: "Hajmal",
              text: "Fabulous Trailer.",
              replies: [
                {
                  name: "Hajmal",
                  text: "Fabulous Trailer.",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "MArul",
          text: "Fabulous Trailer.",
          replies: [
            {
              name: "Hajmal",
              text: "Fabulous Trailer.",
              replies: [
                {
                  name: "Hajmal",
                  text: "Fabulous Trailer.",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Aftab",
      text: "Awesome Trailer. Iam Waiting",
      replies: [
        {
          name: "Hajmal",
          text: "Fabulous Trailer.",
          replies: [],
        },
        {
          name: "Hajmal",
          text: "Fabulous Trailer.",
          replies: [
            {
              name: "Hajmal",
              text: "Fabulous Trailer.",
              replies: [],
            },
          ],
        },
        {
          name: "Hajmal",
          text: "Fabulous Trailer.",
          replies: [
            {
              name: "Hajmal",
              text: "Fabulous Trailer.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Manohar",
      text: "Jai Hindh.",
      replies: [],
    },
    {
      name: "Ungal Nanban",
      text: "Vaa Thalaivaa Vaa Thalaivaa",
      replies: [],
    },
  ];

  const CommentSection = ({ data }) => {
    const { name, text } = data;
    return (
      <div className="bg-gray-200 w-1/2 p-4 rounded-xl shadow-lg flex my-3 text-black">
        <div className="bg-black rounded-full p-4 h-12">
          <FontAwesomeIcon className="text-white mb-2" icon={faUser} />
        </div>
        <div className="px-4">
          <h3 className="font-bold ">@{name}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, i) => (
      <div key={i}>
        <CommentSection data={comment} />
        <div
          className={`pl-5 mx-4 border ${
            !mode
              ? "border-l-black"
              : "border-l-white border-y-black border-x-black "
          }`}
        >
          <CommentList key={i} comments={comment.replies} />
        </div>
      </div>
    ));
  };
  return (
    <div className="my-5 p-2">
      <h3 className="font-bold text-2xl py-2">Comments</h3>

      <CommentList comments={commData} />
    </div>
  );
};

export default CommentContainer;
