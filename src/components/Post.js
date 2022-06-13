import React, { useEffect, useState } from 'react';
import '../App.css'
import data from '../data/posts.json'

export default function Post(props) {
    const [commentsShown, setCommentsShown] = useState(false)
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(props.likes)

    const empty = "https://pixlok.com/wp-content/uploads/2021/12/Instagram-Like-Icon-83nfc3.png"
    const full = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADYCAMAAAA5zzTZAAAAwFBMVEXmAAD///8AAADpAADsAADrAADvAABISEj29vbz8/PdAADYAADw8PDkAAD8/Py6AADh4eG+vr6yAADEAADGxsZwcHCmpqa3t7fNzc03NzchISHn5+d7e3sVFRWPAACBAAANDQ2YmJgQAABOAACdAABtAACEhIRjAACnAABWAAAiAADSAAAoAAAaGhokJCRoaGiJAAB2AABdXV0vLy88AABBQUGSkpJHAAAeAABQUFA+AAB+AAAxAABeAAAXAAArAACHnpaWAAANyElEQVR4nOWd51rjOhCG5ZreIZCyQEILHcJSF/bc/10dx0mkGUW2ZVtSiPf7dc4+xPJrSaNRmyFWBlVGh/3Xh3npeXhin9zdDz7Gk/7eqJzlUQkqj/b6k/HH4P4uKGn4XJo/vPYPR5UsjyJpf9Duzwcntkh3pfFBPcs7RKh+MC7dCUs6Gcz77bSPS0Xa7u8LSwa6v+ioqNty5+I+qaj9dLTypJX+S1LZKz10mqnRoJqdB8mSXvryDVmWdE+28KXGqRsXVXucqqSHPcnnSpGW+6kKD1XqZOLslNIX1ZfqLxKkzcmv9KUHGhyk5jwYZCrp10SiuySSNl8zFR7qOV29dp6zF/WayJpEepCtPtf6kO+v7Y9cJf1KakHxpJGlT0/Pj2bdVm+hVuvs+Pw06g0u5Oxw8yLqAafnx2etVUnd2dH56TTiDxO+aiypsPTp21GvSjzX9TxnpcX/kFr38VP09ycyxnFP6Ix8PnZrYUm0oLCkau/oTYh7kZF0JDAP14+tqu86RKCA1691z9O+QOQnPe/W/IBRWJTrV1uP15u/GYyykB5sPOf9qRdBCWi97uXGD4fx7ao93PjFZdeLoAS0vaf3jR9G99ZI0g2/763b8GPLXsnza0dT+RcQfNLpUc33JEpy/Eb3jf/xfkrSEe91nvakCl99bnf2H/f76BbMt9z/Zm58w8GftcfbwvuIFiwmbXMG4qonX/jyDciM60ZzsQ1uzvGfXc+I9BddfdbeFX7EibivCEkP8U/fu1LNlmc9wk95EaE2uVnDUUrOkNXvcv31UJaU6ziPTvrSF3Jr3+g5z5uT1zr2ir5rbqaSPOcRv7LILAhIMejXjZ+pdLJoWDP0qDt+ilXBE+1Zyi4C5N98JaFukmLQ4+ylk0W1ItvIoWLQt4wVupTjHiegbpDiPtrNXKGrF/D+wMcNYF9tIs/kT/zwmSy/i958o6/ypG34179zfebVC6AW/AKKQsZolvOTkkUD+g2fyFtgjnQE//aU5PzMyxfowWeygR25Jr38nzRoQASNraNYUuiXXToqQAPLePMXPHWyKmkC/u3vTTbrzstxoCc6jCOF3/kpf3tayavegucupzZ74F9uq2pAA/lPwvazQQrNrjrQ4FvX4NC+GFbr4P/fa2raTiiEehBFCq3RpULQoFZrU/boUlAUWBeb1pTV6EI+bMBtMWkTOCxXSktf9FVQft+Ca42K+igrCrjBz00hKZhUfCqxulBuC7Yq8N8tFVYXyiFg6eNCRArbrsqes5J7Zot0php0YRWE7ZeRgq7TVV8814HWUmsOVnKBt1TaJAUt6lFH8YH42Xkw69ZTkA+mNgc8aZnNvT8Vm4i1vN4GaU9XUayrnpQ5UmCObtR30qV8bm5uH2lqPMQBpv4Ck5ZB29XRSVcvgCeRX7o+adBVQfstI1K2+XKrr3jitRBpS1PbXchhDugrJK2YKZ64cOH7XF/jwR+1AkjZxOJKV9cJBfuPPnsQymeu0gSQsuJ7WouHDrjKKYRADrD0jLTDqlRniyLIf9HghyG5rFI7lJStLmuu0qBS1+tKf/RWKarU+ZqUTRbfdBdPSHVVVFV7ST5bl6yvSNkcqqvT8K7KX65WHuv/ph5zf/srUroaed3QXvy6UvVXKSENujU0WJKy6dofzfYoVOi+aHTEQElsrbkdkrLGq90ehWoEJZloPNAm9UNSuiD4ZeJDB5/6yD4yVBL1s/dDUgpupEkFarwbqVLk5y9IWTc103gX7oOpgljzbQektJtOTdhDs6pOWUclzEE61T/EmZZPN2rmASkdTQ2ZCZNy6SrHwCLMFWwZ6j0G5bBZap2wfcTidVPmZdv2iNBNr6kh029UDWqS9gg1vaf6vXvz8qhJ6hO6/Kl1WWdbYgtXF4T6ggU0vdD47hM6nM4K2XrpeZI5oRtPBmbh5sVm4yVCHYcCDqdwQB2Q4T9COiR0j83UTMao2GzmhNj/CKn9D9XpXbFJaT+9I/TAfcEt0vM/NMrQs6daN063JeY5vBB6c62Y3iA9BTUvuodPl/HHhJ5weCokKZ21TQjd+Ndy3GvbYtvFfULPlhVyzYHQo/kdQu9SXG/7pXSosaaz24RtVhRwxQyclRmB9d4CuoNsyWHYBGv4BRxQ2TJSCe7LHBdvmGHHr8YBKR1QDRxcMS2HnnQ4CEjpMPO3cCYJGKTDrewUGxPzeu0m2v0/K5pJYr7gR3jOgZqky6KZJJdW4mtIyo68FowULJcdhqTsbm3BOiq4ZlwJSdmB7aKNqPQ4Uml1bpAuO/wulEnCR8y4s6B6D4wbFmi89Y3zvYVaYWGW94Oe2abNd1ogh5A73rskZeNMgZZCwTn8ESVlDmFxnAfg836AWyTsRqapw4vaBe6r7AFSdiWzKDYJXFe5bwJScCdz26+oSOBk+gTd4GOxOAsyoWHH6Ow6ImU26boQHdVnXsM6fsX6pi0LoViEhTN4U7DNkbLoILfbfk0FArfvHyyOFMTw0RB4wLDgPcX2Bim7r7j75tdjN9rm1gapxWKRaL9GqFkwSIYocgWo1N2evDlghBlbAlLgEn7udKW6IPhfRUgKYrXtslGCsUj6lpAUXC22qzvbfmHbvbMiSEG4tu+dbb8uiNp2GEUK4lfYsx1tvz6wu2MrkhSMNDs6UUVRbJoxpMAove2m+wti6XIh6rl4gyAMn64oSToFBxg+ODNHWgZBSZVHGNMuGAHqjg8XzMcFhREPd62roqhwiRFQYUior93qqijS34TnEsTvBfZ3py6AOVVgjUobWAJSGI1PW/gtDXJghgVBHhZB9GkY4HF3HAgUZEoUUlwUURxGfNUVPU61UOTTvgBKHCUeRktWHbZTj2CEtog0B0JSGJl5ugvTGhTfT2CNIklRWPHrn4+KYo4OI7JCReStgFbpq/HDUXHY/ajEK1G5SGDejDflMW6VykXh4YWZHOJI4QKEffWTSZEPmCW/DMqd8YNvI+Ag9MLxJYEUBaP+uX6hNGhcHqg6TCtx/jNrFTfd1xjQ2NxeMJS7ffkTPQgMGp9ZKzaLGUpi8f3zULHVHcehJGamg0+6UpTdQZlw8o+HWJLEbIMoB4uajB3KhB2GeTxIcl7FDnzaj3IhfBR2PsLZTUGKUX//HB8YB+1OrFGZ/KcI9Utd2pB88lEuoqQ+KkeK+6qqVDD55Hgof2Nk3r2UpFxqKCXpfXKCEpSMLmF4SUGqOAtWftAGSj+anIpTnhSPq/bZdlG9GkxBFO8CpiblULe6OOreTLOASucTRz7wNm/PY1c3dvaSjZRLgXi+Lc+Qyz+XIpG3NKnVRDnNT7ezuIQdI1s2P3w6UrzgYn+pTVQlJy55onwK75SkOG3e3xvTnZXzF37FpF/OS2rhfPGGt5K5ZIKDiHVdNaRoHVhJ2kd5eVWUIPIjJWhaUuzvG4vMTfjsjFI+fT5SzjM8z5u1VFZ4DVDS1c1HyuWlvjIzOeeG0Ul60AykVh3lojUy2nBp7VL4C7lIOR9iqn+08fEwGrn1opwUXq9ZqKU5+4+Dh9FU/kJeUm5g1TracNPuqGT3uki5gVXjNM6roiRvJVGmea2k6DBaMI3TZZa8m2tYTvphND8pNzn/1jONyz+MKiC16vfwJX7rmMZxw6j8tFstqVVGo42GgRVvvOQDzUVqWQ/oTVQPrNy0O9swqogUHfxQvRTMJRHNOIyqIuVGG5VLwXh9IfMwqoyUm8apO1GJTjzaL2lnoxpIuWmcIh/C8b7hU+eZ/QWVpNYIjTZKcr455A0+U2qHKUkKSK0KXgrOj5pt4yVBKkit5gd8sdyTc6eG8nFPVLyiIlJuYM256u1U0Q5TPn+BSREpnrF+5kH1cI1mWl8QSRUpiMdj5zoP4dXe4ZPS7EfESxkp9iEynwnmNkdzeoBQ6kixD3Gb7QKVV4Oruid5PUAohaR4cn6d5ZSLV4Pz7pQbLwlSSYon53/Tz+JwH72vJJeYQkpJOdS0B3pw032uK301xaTckks6VO8G1uhdfp8eSzEpumpjT9OgOrUprFG1TddST2qN4LZNimtFTgOudg6Vg6ontSpD8MbvsqgOgbujz6qbrqWDFK8ZyroQHtzvVt90LS2kVgVuxsn5wO4lBNVQo3pIrTJEPZUARXcq0x5gkJQWUqsMrxVdJU7N4Z39dXhA5dJDiq8VJV1AQcudij0jJk2kVh1a4PhrRb7UVcPc0kVq1eG4GneiEl96UTl7wdJGir2l6NAmKCaMyvkoL32k2AeOWvIGkUptlSsMm9JIilEjjt4hH1DZmpFIOknx8r7Q2/fhGQZVq4BiaSXFqAIX2IUeg/Q582zSSwpCIC9c4I0ahRukeXb2ZaSZFKHyzhIyuxL3tfJJNyk6uXSMxho09R5o8gGZtJOig97oiJYHt5kULxoJpJ/UgttTIGANmr/oc42oDJA2wcycLbcgb1frQLqSAVLkAn86Ams0MfASRkiRs/S07KoOWPHUbnZDGSFFY03oAcPVlGftZjeUGVJ0bilwC9EZbG0zUixDpPD+1C2Ol9dJ/rESmSKFyy2XDtj11uztMpkiRVYJuAwfpso3R8odRltLz4qnSOZIudOUS+lcZOBkkBS5hYY7qWWWtMKDJocQUSiTpNxhSmMj6VJGSblrNib8eiazpCgOpxl3l8owKVzuNjfAhDJMCnx9U17gWqZJ6WKLktPJaWSc1PoVgp4YL9c86dIB1rjVFKH/ARasDa+nFGYBAAAAAElFTkSuQmCC"

    const comments = []
    for (const i in props.comments){
        // console.log(props.comments[i])
        const com = props.comments[i]
        comments.push(
            <p><strong>{com.user}</strong> : {com.text}</p>
        )
    }
    
    function like(id) {
        setLiked(current => !current)
        // console.log(data)
        let cPost;
        for(const i in data){
            let post = data[i]
            if(post.id === id && liked === false){
                // console.log(post)
                // console.log(post.likes)
                post.likes += 1
                console.log(post.likes)
                setLikes(post.likes)
                
            }else if(post.id === id && liked === true){
                // console.log(post.likes)
                post.likes -= 1
                console.log(post.likes)
                setLikes(post.likes)   

            }
        }

        return cPost

    }
    

    return (
        <div className='post'>
            <div className='postUsername'>
                <img src={props.pfp} alt='pfp' />
                <p>{props.username}</p>
            </div>
            <div className='postImg' onDoubleClick={() => like(props.id)}>
                <img src={props.postImg} alt='post Image' />
            </div>
            <div className='actionPanel'>
                <div id='heart' className='clickable' onClick={() => like(props.id)}><img src={liked ? full : empty}/></div>
                <div id='comment' className='clickable'><img src='https://cdn0.iconfinder.com/data/icons/social-media-logo-4/32/Social_Media_instagram_comment-512.png'/></div>
                <div id='share' className='clickable'><img src='https://cdn141.picsart.com/328472243107211.png'/></div>
                <div id='save' className='clickable'><img src='https://cdn-icons-png.flaticon.com/512/6165/6165217.png' /></div>
            </div>
            <div className="postDescription">
                <p><span role="img">👍</span> Liked by <strong>Sasuke</strong> and <strong>{likes}</strong> others.</p>
                <p><strong>{props.username}</strong> Qe qitu sa e rreha painin hehe !</p>
            </div>
            <div className='commentSection'>
                {commentsShown ? <p>{comments}</p> : <p className='clickable' onClick={() => setCommentsShown(current => !current) }>Click to Show Comments</p>}
                {/* <p><strong>{props.comments[0].user} : </strong>{props.comments[0].text}</p> */}
                
            </div>
        </div>
    )

}