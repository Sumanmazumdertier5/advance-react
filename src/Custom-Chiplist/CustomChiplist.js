import React, {useState, useEffect, useRef} from "react";


const CustomChiplist = ()=>{
    let ref = useRef();
    const [tagOpen, setTagOpen] = useState(false);
    const [tagsData, setTagsData] = useState();
    const [selectedTags, setSelectedTags] = useState([]);
    let tags = [
        {
          "_id": "64789d429f3d330008619da9",
          "name": "vcxvbc",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2023-06-01 13:29:38",
          "updatedAt": "2023-06-01 13:29:38"
        },
        {
          "_id": "6391a841b602c800082aa40c",
          "name": "xcxdfsdfsdfgbdfgdf",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-12-08 09:02:56",
          "updatedAt": "2022-12-08 09:02:56"
        },
        {
          "_id": "6307e55b55ab2b0009ba7ea6",
          "name": "checkedIn",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-08-25 21:10:51",
          "updatedAt": "2022-08-25 21:10:51"
        },
        {
          "_id": "62fe18249775370009828be1",
          "name": "xcvzxcvzxcvzx",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-08-18 10:44:52",
          "updatedAt": "2022-08-18 10:44:52"
        },
        {
          "_id": "62badac0aee13f00098f8086",
          "name": "meet  ",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-06-28 10:41:04",
          "updatedAt": "2022-06-28 10:41:04"
        },
        {
          "_id": "62a6d73322355b00093058fb",
          "name": "new appointment",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-06-13 06:20:35",
          "updatedAt": "2022-06-13 06:20:35"
        },
        {
          "_id": "62a6d53022355b00093058fa",
          "name": "meeting",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-06-13 06:12:00",
          "updatedAt": "2022-06-13 06:12:00"
        },
        {
          "_id": "62a23532f4ae0700092c9594",
          "name": "hhhhh",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-06-09 18:00:18",
          "updatedAt": "2022-06-09 18:00:18"
        },
        {
          "_id": "62999533a07c1000090a3938",
          "name": "testing xxx",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-06-03 04:59:31",
          "updatedAt": "2022-06-03 04:59:31"
        },
        {
          "_id": "62998e9924f49b00092bd466",
          "name": "testing",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-06-03 04:31:21",
          "updatedAt": "2022-06-03 04:31:21"
        },
        {
          "_id": "628ded39caf6f6bc9bfa9110",
          "name": " asd asd asd sd asdx",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:47:52",
          "updatedAt": "2022-05-25 08:47:52"
        },
        {
          "_id": "628decfccaf6f6bc9bfa910f",
          "name": " asd as asd",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:46:52",
          "updatedAt": "2022-05-25 08:46:52"
        },
        {
          "_id": "628dec9a39fe92bbb859ce96",
          "name": "asd asd asd",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:45:13",
          "updatedAt": "2022-05-25 08:45:13"
        },
        {
          "_id": "628dec8239fe92bbb859ce95",
          "name": "fdgdfgdf",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:44:49",
          "updatedAt": "2022-05-25 08:44:49"
        },
        {
          "_id": "628dec3039fe92bbb859ce93",
          "name": "dfgdfgdfg",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:43:28",
          "updatedAt": "2022-05-25 08:43:28"
        },
        {
          "_id": "628dec3139fe92bbb859ce94",
          "name": "dfgdfgdfg",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:43:28",
          "updatedAt": "2022-05-25 08:43:28"
        },
        {
          "_id": "628dec0c39fe92bbb859ce92",
          "name": "sdfgasd",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:42:52",
          "updatedAt": "2022-05-25 08:42:52"
        },
        {
          "_id": "628debd839fe92bbb859ce91",
          "name": "rsdfgdg",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:42:00",
          "updatedAt": "2022-05-25 08:42:00"
        },
        {
          "_id": "628deb0df04707b970df2dd1",
          "name": "asdasd",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-25 08:38:36",
          "updatedAt": "2022-05-25 08:38:36"
        },
        {
          "_id": "6286505d0bfa6f000988c9b1",
          "name": "abdfb cfvb",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 14:12:45",
          "updatedAt": "2022-05-19 14:12:45"
        },
        {
          "_id": "6285fb770aa4ae000955fb56",
          "name": "tag 23",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:10:31",
          "updatedAt": "2022-05-19 08:10:31"
        },
        {
          "_id": "6285fb220aa4ae000955fb55",
          "name": "tag 22",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:09:06",
          "updatedAt": "2022-05-19 08:09:06"
        },
        {
          "_id": "6285fa8c0aa4ae000955fb54",
          "name": "tag 21",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:06:36",
          "updatedAt": "2022-05-19 08:06:36"
        },
        {
          "_id": "6285fa6d0aa4ae000955fb53",
          "name": "tag 20",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:06:05",
          "updatedAt": "2022-05-19 08:06:05"
        },
        {
          "_id": "6285fa540aa4ae000955fb52",
          "name": "tag 19",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:05:40",
          "updatedAt": "2022-05-19 08:05:40"
        },
        {
          "_id": "6285fa190aa4ae000955fb51",
          "name": "tag 17",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:04:41",
          "updatedAt": "2022-05-19 08:04:41"
        },
        {
          "_id": "6285f9a70aa4ae000955fb50",
          "name": "tag 16",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:02:47",
          "updatedAt": "2022-05-19 08:02:47"
        },
        {
          "_id": "6285f98a0aa4ae000955fb4f",
          "name": "tag 15",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 08:02:18",
          "updatedAt": "2022-05-19 08:02:18"
        },
        {
          "_id": "6285f8dc0aa4ae000955fb4e",
          "name": "tag 14",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:59:24",
          "updatedAt": "2022-05-19 07:59:24"
        },
        {
          "_id": "6285f8240aa4ae000955fb4d",
          "name": "tag 13",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:56:20",
          "updatedAt": "2022-05-19 07:56:20"
        },
        {
          "_id": "6285f7f30aa4ae000955fb4c",
          "name": "tag 12",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:55:31",
          "updatedAt": "2022-05-19 07:55:31"
        },
        {
          "_id": "6285f6870aa4ae000955fb4b",
          "name": "tag 11",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:49:27",
          "updatedAt": "2022-05-19 07:49:27"
        },
        {
          "_id": "6285f6250aa4ae000955fb4a",
          "name": "tag 10",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:47:49",
          "updatedAt": "2022-05-19 07:47:49"
        },
        {
          "_id": "6285f6130aa4ae000955fb49",
          "name": "tag 9",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:47:31",
          "updatedAt": "2022-05-19 07:47:31"
        },
        {
          "_id": "6285f5f40aa4ae000955fb48",
          "name": "tag 8",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:47:00",
          "updatedAt": "2022-05-19 07:47:00"
        },
        {
          "_id": "6285f5ae0aa4ae000955fb47",
          "name": "tag 7",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:45:50",
          "updatedAt": "2022-05-19 07:45:50"
        },
        {
          "_id": "6285f4ec0aa4ae000955fb46",
          "name": "tag 6",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:42:36",
          "updatedAt": "2022-05-19 07:42:36"
        },
        {
          "_id": "6285f4e30aa4ae000955fb45",
          "name": "tag 5",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:42:27",
          "updatedAt": "2022-05-19 07:42:27"
        },
        {
          "_id": "6285f4dd0aa4ae000955fb44",
          "name": "tag 4",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:42:21",
          "updatedAt": "2022-05-19 07:42:21"
        },
        {
          "_id": "6285f4bb0aa4ae000955fb43",
          "name": "tag 3",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:41:47",
          "updatedAt": "2022-05-19 07:41:47"
        },
        {
          "_id": "6285f4590aa4ae000955fb42",
          "name": "tag 2",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:40:09",
          "updatedAt": "2022-05-19 07:40:09"
        },
        {
          "_id": "6285f4460aa4ae000955fb41",
          "name": "tag 1",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:39:50",
          "updatedAt": "2022-05-19 07:39:50"
        },
        {
          "_id": "6285f3b40aa4ae000955fb40",
          "name": "agv v",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:37:24",
          "updatedAt": "2022-05-19 07:37:24"
        },
        {
          "_id": "6285f36e0aa4ae000955fb3f",
          "name": "awgawgafghng db",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:36:14",
          "updatedAt": "2022-05-19 07:36:14"
        },
        {
          "_id": "6285f36c0aa4ae000955fb3e",
          "name": "awgawga",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:36:12",
          "updatedAt": "2022-05-19 07:36:12"
        },
        {
          "_id": "6285f3690aa4ae000955fb3d",
          "name": "yyyx",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:36:09",
          "updatedAt": "2022-05-19 07:36:09"
        },
        {
          "_id": "6285f3640aa4ae000955fb3c",
          "name": "zzz",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:36:04",
          "updatedAt": "2022-05-19 07:36:04"
        },
        {
          "_id": "6285f3090aa4ae000955fb3b",
          "name": "something ex",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:34:33",
          "updatedAt": "2022-05-19 07:34:33"
        },
        {
          "_id": "6285f2fd0aa4ae000955fb3a",
          "name": "something",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:34:21",
          "updatedAt": "2022-05-19 07:34:21"
        },
        {
          "_id": "6285f2f90aa4ae000955fb39",
          "name": "somethin",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:34:17",
          "updatedAt": "2022-05-19 07:34:17"
        },
        {
          "_id": "6285f2f50aa4ae000955fb38",
          "name": "somethi",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:34:13",
          "updatedAt": "2022-05-19 07:34:13"
        },
        {
          "_id": "6285f2f10aa4ae000955fb37",
          "name": "someth",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:34:09",
          "updatedAt": "2022-05-19 07:34:09"
        },
        {
          "_id": "6285f2da0aa4ae000955fb36",
          "name": "somet",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 07:33:46",
          "updatedAt": "2022-05-19 07:33:46"
        },
        {
          "_id": "6285d9b3658295000978022e",
          "name": "yyy",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 05:46:27",
          "updatedAt": "2022-05-19 05:46:27"
        },
        {
          "_id": "6285d390349694000918c36d",
          "name": "xxx",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-19 05:20:16",
          "updatedAt": "2022-05-19 05:20:16"
        },
        {
          "_id": "6284ed3229e3bf000997b7c7",
          "name": "some test tag",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-18 12:57:22",
          "updatedAt": "2022-05-18 12:57:22"
        },
        {
          "_id": "6284ed0129e3bf000997b7c6",
          "name": "agawgawg",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-18 12:56:33",
          "updatedAt": "2022-05-18 12:56:33"
        },
        {
          "_id": "62821b7458c7132d3dc82ed9",
          "name": "hello aerw",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-16 09:37:56",
          "updatedAt": "2022-05-16 09:37:56"
        },
        {
          "_id": "62821b3a58c7132d3dc82ed7",
          "name": "hello",
          "orgId": "603e3f245e257524e35660c2",
          "createdBy": "603e792d5e257524e35660d5",
          "updatedBy": "603e792d5e257524e35660d5",
          "createdAt": "2022-05-16 09:36:58",
          "updatedAt": "2022-05-16 09:36:58"
        }
      ]

    useEffect(()=>{
        setTagsData(tags);
    }, []);

    const tagHandeler = ()=>{
        setTagOpen(true);
    }
    const selectedTagHandeler = (e, item, index)=>{
        let selectedArray = [...tagsData];
        if(e.target.checked){
            selectedArray[index].checked = e.target.checked
            // console.log(selectedArray);
            // const updatedItems = tagsData.map((item, index)=> item._id === e.target.value ? {...item, checked : e.target.checked}: item);
            // console.log(updatedItems);
          }
          else{
            selectedArray[index].checked = false;
          }
          setSelectedTags(selectedArray);
    }
    console.log(selectedTags);



    const tagClose = (selectItem, index)=>{
      // console.log(selectItem, index, selectedTags);
      
      let deselectTags = selectedTags.map((item)=>{
        if(item._id == selectItem._id){
          console.log(item._id, selectItem._id);
          return {...item, checked: false}
        }
        else{
          return item;
        }
      });
      setSelectedTags(deselectTags);
      console.log("Deselected tag", selectedTags)
      // setSelectedTags(deselectTags);
      // setTagsData(deselectTags);
    }

    useEffect(()=>{
        const checkOnOutside = (e)=>{
            if(typeof option != "object" && ref.current && !ref.current.contains(e.target)) {
                setTagOpen(false);                
            }
        }
        document.addEventListener("click", checkOnOutside);
        return () => {
            document.removeEventListener("click", checkOnOutside);
        };
    })
    return(
        <React.Fragment>
            <h3>Chip list</h3>
            <div className="tags">
              <ul>
              { 
                  selectedTags && selectedTags.length > 0 && selectedTags.filter((item)=> item?.checked).map((item, index)=>{
                    return(
                      <li key={item._id}>
                        <p>{item.name} <button onClick={tagClose(item, index)}>X</button></p>
                      </li>
                    )
                  })
              }
              </ul>
            </div>
            <div ref={ref}>
                <input type="text" onClick={tagHandeler} />
                {
                    tagOpen && 
                        <>
                            <ul>
                                {
                                    tagsData.length && tagsData.map((item, index)=>{
                                        return(
                                            <li key={item._id}>
                                                <label >
                                                    <input type="checkbox" name="checked" value={item._id} checked={item['checked']} onChange={(e)=>selectedTagHandeler(e, item, index)} />
                                                    {item.name}
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </>
                    
                }
            </div>
        </React.Fragment>
    )
}

export default CustomChiplist