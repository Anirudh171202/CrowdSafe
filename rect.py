def is_contained_in_rect(rect1, rect2):
    l1x = rect1[0]
    l2x = rect2[0]
    l1y = rect1[1]
    l2y = rect2[1]
    r1x = rect1[0]+rect1[2]
    r2x = rect2[0]+rect2[2]
    r1y = rect1[1]+rect1[3]
    r2y = rect2[1]+rect2[3]

    if l1x > r2x or l2x > r1x:
        return False

    if r1y < l2y or r2y < l1y:
        return False

    return True


keys = list(body.keys())

final_d = {}

for key in keys:
    final_d[key] = []


lookahead = 4


for cur_frame in range(len(keys)-lookahead):
    for rect in body[keys[cur_frame]]:
        count = 0
        # if(rect[2]*rect[3] < 2300):
        #     continue
        for future_frame in range(cur_frame+1, cur_frame+lookahead+1):

            for future_rect in body[keys[future_frame]]:
                # print(rect, future_rect)
                # if is_contained_in_rect(rect, future_rect):
                if is_contained_in_rect(rect, future_rect):

                    count += 1
                    break
        if count/lookahead >= 0.5:
            final_d[keys[cur_frame]].append(rect)


with open("averaging_data_new.json", "w+") as f:
    json.dump(final_d, f)
