import cv2
from google.colab.patches import cv2_imshow

def get_real_bounding(img):
    image = img

    # create the mask and use it to change the colors
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    thresh = cv2.threshold(
        gray, 255, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

    # Find contours
    cnts = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    return cnts


def get_num_red(img):
    lower = (0, 0, 20)  # lower bound for each channel
    upper = (220, 220, 255)  # upper bound for each channel
    image = img

    # create the mask and use it to change the colors
    mask = cv2.inRange(image, lower, upper)
    masked = cv2.bitwise_and(image, image, mask=mask)
    gray = cv2.cvtColor(masked, cv2.COLOR_BGR2GRAY)
    thresh = cv2.threshold(
    gray, 255, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

    # Find contours
    cnts = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    return len(cnts)


def find_actual_boxes(img):
    image = cv2.imread(img)
    image = cv2.resize(image, (WIDTH, HEIGHT), fx=0, fy=0,
                       interpolation=cv2.INTER_CUBIC)
    width, height, shape = image.shape
    real_counts = get_real_bounding(image)
    rects = []
    # look at % red
    for c in real_counts:
        x, y, w, h = cv2.boundingRect(c)
        num_dense = get_num_red(image[y:y+h, x:x+w])
        min_hw_percent = 0.05

        if (num_dense > w*0.015*h*0.015 and w > width*min_hw_percent and h > height * min_hw_percent and w < width*0.35 and h < height*0.35):
            cv2.rectangle(image, (x, y), (x + w, y + h), (36, 255, 12), 2)
            rects.append([x, y, w, h])
    return rects
