typedef struct MinMax{
    NSInteger min;
    NSInteger max;
} MinMax;

NSInteger slice(NSArray *array) {

    MinMax *left, *right;
    left = (MinMax*)malloc(sizeof(MinMax)*(array.count-1));
    right = (MinMax*)malloc(sizeof(MinMax)*(array.count-1));


    left->min = [(NSNumber*)array[0] integerValue];
    left->max = left->max;
    right->max = [(NSNumber*)array[array.count-1] integerValue];;
    right->min = right->max;

    MinMax *prev = left;
    MinMax *next;
    for(NSInteger idx = 1; idx < array.count-1; ++idx) {
        next = prev + 1;
        NSInteger value = [(NSNumber*)array[idx] integerValue];
        if(value < prev->min) {
            next->min = value;
        }
        if(value > prev->max) {
            next->max = value;
        }
        prev = next;
    }

    prev = right;
    for(NSInteger idx = array.count-2; idx > 0; --idx) {
        next = prev + 1;
        NSInteger value = [(NSNumber*)array[idx] integerValue];
        if(value < prev->min) {
            next->min = value;
        }
        if(value > prev->max) {
            next->max = value;
        }
        prev = next;
    }

    NSInteger leftIndex = array.count / 2;
    NSInteger rightIndex = leftIndex;
    BOOL atLeft = YES;
    BOOL leftFinished = NO;
    BOOL rightFinished = NO;

    while(1) {
        if(atLeft && !leftFinished) {
            MinMax *l = left + (leftIndex-1);
            MinMax *r = right + (array.count - leftIndex - 1);
            if(l->max < r->min || l->min > r->max) {
                free(left);
                free(right);
                return leftIndex;
            }
            -- leftIndex;
            leftFinished = (leftIndex == 0);
        } else if(!atLeft && !rightFinished) {
            MinMax *l = left + (rightIndex - 1);
            MinMax *r = right + (array.count - rightIndex - 1);
            if(l->max < r->min || l->min > r->max) {
                free(left);
                free(right);
                return rightIndex;
            }
            ++ rightIndex;
            rightFinished = (rightIndex == array.count);
        } else {
            free(left);
            free(right);
            return -1;
        }
    }
    return 0;
}